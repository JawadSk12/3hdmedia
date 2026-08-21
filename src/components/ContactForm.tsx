import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

interface Field {
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  options?: string[]  // for select
  half?: boolean
}

interface ContactFormProps {
  fields: Field[]
  submitLabel?: string
  successMessage?: string
  accentColor?: string
}

interface FormValues {
  [key: string]: string
}

export default function ContactForm({
  fields,
  submitLabel = 'Submit Enquiry',
  successMessage = "Thank you! We'll get back to you within 48 hours.",
  accentColor = 'var(--blue-500)',
}: ContactFormProps) {
  const initialValues = fields.reduce<FormValues>((acc, f) => ({ ...acc, [f.name]: '' }), {})
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormValues>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const validate = () => {
    const errs: FormValues = {}
    fields.forEach(f => {
      if (f.required && !values[f.name].trim()) errs[f.name] = `${f.label} is required`
    })
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setSuccess(true)
    setLoading(false)
    setValues(initialValues)
    setTimeout(() => setSuccess(false), 6000)
  }

  // Group fields into rows (half-width pairs)
  const rows: Field[][] = []
  let i = 0
  while (i < fields.length) {
    if (fields[i].half && fields[i + 1]?.half) {
      rows.push([fields[i], fields[i + 1]])
      i += 2
    } else {
      rows.push([fields[i]])
      i++
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: 'grid',
            gridTemplateColumns: row.length === 2 ? '1fr 1fr' : '1fr',
            gap: '1rem',
            marginBottom: '1.1rem',
          }}
        >
          {row.map(field => (
            <div key={field.name}>
              <label className="input-label">
                {field.label}
                {field.required && <span style={{ color: 'var(--red-400)', marginLeft: '.2rem' }}>*</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`input-field${errors[field.name] ? ' error' : ''}`}
                  style={{ resize: 'vertical', minHeight: '130px' }}
                />
              ) : field.options ? (
                <select
                  name={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  className={`input-field${errors[field.name] ? ' error' : ''}`}
                >
                  <option value="">— Select —</option>
                  {field.options.map(o => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`input-field${errors[field.name] ? ' error' : ''}`}
                />
              )}

              {errors[field.name] && (
                <p style={{ fontSize: '.78rem', color: 'var(--red-400)', marginTop: '.3rem' }}>
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        style={{
          width: '100%',
          padding: '.9rem 2rem',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          background: loading ? 'var(--slate-400)' : accentColor,
          color: 'white',
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          fontWeight: 700,
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.5rem',
          transition: 'background .25s',
          boxShadow: loading ? 'none' : `0 6px 20px rgba(29,78,216,.3)`,
          marginTop: '.5rem',
        }}
      >
        {loading ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
              <circle cx="12" cy="12" r="10" strokeOpacity=".3" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            {submitLabel}
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '.75rem',
              padding: '1rem 1.25rem',
              background: 'rgba(34,197,94,.1)',
              border: '1px solid rgba(34,197,94,.25)',
              borderRadius: 'var(--radius-md)',
              color: '#166534',
              fontWeight: 600,
              fontSize: '.9rem',
              marginTop: '1rem',
            }}
          >
            <CheckCircle size={20} style={{ flexShrink: 0, color: '#16A34A' }} />
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          form > div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}

'use client'

import { useState } from 'react'

type FormState = {
  firstName: string
  lastName: string
  email: string
  country: string
  message: string
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string>('')

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
    }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || 'Submission failed')
      }

      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h6 className='text-white sm:text-[26px] leading-[2.11rem] text-xl font-bold pb-5'>
        Contact us
      </h6>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 items-center mb-6'>
        <div className='col-span-1'>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={form.firstName}
            onChange={onChange('firstName')}
            className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
            placeholder='First name'
            autoComplete='given-name'
            required
          />
        </div>

        <div className='col-span-1'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={form.lastName}
            onChange={onChange('lastName')}
            className='bg-white text-darkmode text-base rounded-lg dark:bg-darkmode block w-full p-2.5 dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
            placeholder='Last name'
            autoComplete='family-name'
            required
          />
        </div>

        <div className='md:col-span-2 col-span-1'>
          <input
            type='email'
            id='email'
            name='email'
            value={form.email}
            onChange={onChange('email')}
            className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
            placeholder='youremail@website.com'
            autoComplete='email'
            required
          />
        </div>

        <div className='md:col-span-2 col-span-1'>
          <input
            type='text'
            id='country'
            name='country'
            value={form.country}
            onChange={onChange('country')}
            className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
            placeholder='Country'
            required
          />
        </div>

        <div className='md:col-span-2 col-span-1'>
          <textarea
            id='message'
            name='message'
            rows={4}
            value={form.message}
            onChange={onChange('message')}
            className='bg-white block p-2.5 w-full text-base text-darkmode rounded-lg dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
            placeholder='Write your thoughts here...'
          />
        </div>
      </div>

      {status === 'success' && (
        <p className="text-white text-sm mb-3">Thanks — we’ll get back to you shortly.</p>
      )}
      {status === 'error' && (
        <p className="text-white text-sm mb-3">Error: {error}</p>
      )}

      <button
        type='submit'
        disabled={status === 'submitting'}
        className='text-secondary bg-LightApricot hover:bg-secondary focus:ring-4 hover:text-white focus:outline-hidden focus:ring-blue-300 font-normal rounded-lg text-base w-full px-5 py-2.5 text-center transition-all duration-0.4s disabled:opacity-60 disabled:cursor-not-allowed'
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
      </button>
    </form>
  )
}
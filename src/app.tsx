import logo from './assets/logo-nlw.svg'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="nlw-expert logo" />

      <form className='w-full' action="">
        <input
          type="text"
          placeholder='Busque suas notas'
          className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500 '
        />
      </form>

      <div className='h-px bg-slate-700'></div>
    </div>
  )
}



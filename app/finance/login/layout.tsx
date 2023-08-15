interface LoginProps {
  children: React.ReactNode
}

const Login: React.FC<LoginProps> = ({ children }) => {
  return (
    <div className='h-full w-full justify-center items-center flex mt-[17vh]'>
      <div className="w-[300px]">
      {children}
      </div>
  
    </div>
  )
}

export default Login

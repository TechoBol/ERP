import Sidebar from '@/components/human-resources/Sidebar'

interface HumanResourcesLayoutProps {
  children: React.ReactNode
}

const layout = ({ children }: HumanResourcesLayoutProps) => {
  return (
    <main className='flex flex-col'>
      <div className='flex'>
        <Sidebar />
        <div>{children}</div>
      </div>
    </main>
  )
}

export default layout

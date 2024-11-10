import Header from './Header'

const Layout = ({ children }) => {
    return (
      <div className="min-h-screen w-full">
        <Header />
        <main className="w-full pt-16">
          {children}
        </main>
      </div>
    );
  };
  
  export default Layout;
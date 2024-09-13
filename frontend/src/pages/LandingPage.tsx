import { Link } from 'react-router-dom'

export function HomePageComponent() {
  return (
    <div className="h-screen w-screen absolute top-0 right-0 left-0 bg-gray-50">
  {/* Hero Section */}
  <section className="w-full bg-blue-600 text-white py-20 relative">
    <div className="absolute top-0 left-0 p-4">
      <h1 className="text-2xl md:text-4xl font-bold">Svaasth</h1>
    </div><br></br><br></br><br></br><br></br>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Hospital Management System</h1>
        <p className="text-xl">Providing efficient healthcare solutions</p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
  <img 
    src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/5260308/1160/774/m1/fpnw/wm0/health-care-.jpg?1540457127&s=3b6e89ad77e169678f91198be0b1f24d" 
    alt="Patient" 
    width={300} 
    height={300} 
    className="rounded-full mb-4 md:mb-0 object-cover" 
  />
</div>

    </div><br></br><br></br><br></br>
  </section>




      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* {[
              { title: 'Patient', link: '/patient', image: '/placeholder.svg?height=200&width=200' },
              { title: 'Doctor', link: '/doctor', image: '/placeholder.svg?height=200&width=200' },
              { title: 'Receptionist', link: '/receptionist', image: '/placeholder.svg?height=200&width=200' },
            ].map((service, index) => (
              <Link
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} Vector`}
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                /> */}
              <Link to="/patientlogin">
                <img src="https://as1.ftcdn.net/v2/jpg/01/39/08/44/1000_F_139084493_wj5TAr9e1RwM9Ds32J8HSRasT6ibF2a2.jpg" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
                <h3 className="text-xl font-semibold">Patient</h3>
              </Link>
              <Link to="/adminsignin">
                <img src="https://static.vecteezy.com/system/resources/previews/015/391/002/non_2x/medical-reception-icon-outline-style-vector.jpg" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
                <h3 className="text-xl font-semibold">Receptionist</h3>
              </Link>
              <Link to="/doctorssignin">
                <img src="https://static.vecteezy.com/system/resources/previews/015/271/788/non_2x/doctor-with-stethoscope-icon-design-physician-doctor-flat-icon-for-apps-and-websites-doctor-logo-illustration-vector.jpg" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
                <h3 className="text-xl font-semibold">Doctor</h3>
              </Link>
              <Link to="/inventorysignin">
                <img src="https://www.osculati.com/SupplyImages/WF-0048/ico-distribuzione-08.png" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
                <h3 className="text-xl font-semibold">Inventory</h3>
              </Link>
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Aim</h2>
          <div className="max-w-3xl mx-auto">
            {[
              'Provide high-quality healthcare services to all patients',
              'Implement efficient management systems for better healthcare delivery',
              'Foster a collaborative environment among healthcare professionals',
            ].map((aim, index) => (
              <div key={index} className="flex items-start mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg">{aim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <p className="text-lg">
                Our hospital management system streamlines healthcare processes, enhances patient care, and improves
                operational efficiency. We provide comprehensive solutions for patient management, appointment
                scheduling, billing, and medical record keeping.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg">
                We are a team of dedicated healthcare professionals and technology experts committed to revolutionizing
                hospital management. Our goal is to empower healthcare providers with innovative tools to deliver
                exceptional patient care and manage resources effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default function Footer() {
  return (
    <div>

        <footer className=" text-gray-700 py-10 mt-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Library Info */}
    <div>
      <h2 className="text-xl font-semibold mb-4">Library</h2>
      <p className="text-sm">
        Empowering knowledge and learning through access to books, journals, and digital resources.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Catalog</a></li>
        <li><a href="#" className="hover:underline">E-Resources</a></li>
        <li><a href="#" className="hover:underline">Membership</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Support</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Contact Us</a></li>
        <li><a href="#" className="hover:underline">FAQs</a></li>
        <li><a href="#" className="hover:underline">Help Desk</a></li>
        <li><a href="#" className="hover:underline">Feedback</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <p className="text-sm">123 Library Lane<br />Booktown, BK 10101</p>
      <p className="text-sm mt-2">Email: info@library.com</p>
      <p className="text-sm">Phone: (123) 456-7890</p>
    </div>
  </div>

  <div className="border-t mt-10 pt-4 text-center text-xs text-gray-500">
    &copy; {new Date().getFullYear()} Library. All rights reserved.
  </div>
</footer>





      
    </div>
  )
}

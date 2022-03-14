export default function Alert({ variant, children }) {

  return (
    variant == "success" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-green-600 bg-green-200" role="alert">
        {children}
      </div>
    : variant == "danger" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-red-600 bg-red-200" role="alert">
        {children}
      </div>
    : variant == "warning" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-yellow-500 bg-yellow-200" role="alert">
        {children}
      </div>
    : variant == "info" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-orange-600 bg-orange-200" role="alert">
        {children}
      </div>
    : variant == "purple" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-violet-700 bg-violet-200" role="alert">
        {children}
      </div>
    : variant == "dark" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-gray-700 bg-gray-200" role="alert">
        {children}
      </div>
    :
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-blue-600 bg-blue-200" role="alert">
        {children}
      </div>
  )
}
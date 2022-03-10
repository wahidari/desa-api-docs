export default function Alert({ variant, children }) {

  return (
    variant == "success" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-green-700 dark:text-green-800 bg-green-200" role="alert">
        {children}
      </div>
    : variant == "danger" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-red-700 dark:text-red-800 bg-red-200" role="alert">
        {children}
      </div>
    : variant == "warning" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-yellow-700 dark:text-yellow-800 bg-yellow-200" role="alert">
        {children}
      </div>
    : variant == "info" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-orange-700 dark:text-orange-800 bg-orange-200" role="alert">
        {children}
      </div>
    : variant == "dark" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-gray-700 dark:text-gray-800 bg-gray-200" role="alert">
        {children}
      </div>
    : 
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-blue-700 dark:text-blue-800 bg-blue-200" role="alert">
        {children}
      </div>
  )
}
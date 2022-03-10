export default function AlertOutline({ variant, children }) {

  return (
    variant == "success" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-green-700 dark:text-green-800 border border-green-700 dark:border-green-500" role="alert">
        {children}
      </div>
    : variant == "danger" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-red-700 dark:text-red-800 border border-red-700 dark:border-red-500" role="alert">
        {children}
      </div>
    : variant == "warning" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-yellow-700 dark:text-yellow-800 border border-yellow-700 dark:border-yellow-500" role="alert">
        {children}
      </div>
    : variant == "info" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-orange-700 dark:text-orange-800 border border-orange-700 dark:border-orange-500" role="alert">
        {children}
      </div>
    : variant == "dark" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-gray-700 dark:text-gray-800 border border-gray-700 dark:border-gray-500" role="alert">
        {children}
      </div>
    : 
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-blue-700 dark:text-blue-800 border border-blue-700 dark:border-blue-500" role="alert">
        {children}
      </div>
  )
}
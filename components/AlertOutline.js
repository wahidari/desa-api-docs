export default function AlertOutline({ variant, children }) {

  return (
    variant == "success" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-green-500 border border-green-500" role="alert">
        {children}
      </div>
    : variant == "danger" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-red-500 border border-red-500" role="alert">
        {children}
      </div>
    : variant == "warning" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-yellow-500 border border-yellow-500" role="alert">
        {children}
      </div>
    : variant == "info" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-orange-500 border border-orange-500" role="alert">
        {children}
      </div>
    : variant == "purple" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-violet-500 border border-violet-500" role="alert">
        {children}
      </div>
    : variant == "dark" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-gray-700 dark:text-gray-300 border border-gray-500" role="alert">
        {children}
      </div>
    :
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-blue-500 border border-blue-500" role="alert">
        {children}
      </div>
  )
}
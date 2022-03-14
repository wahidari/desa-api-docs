export default function BadgeOutline({ variant, children }) {

  return (
    variant == "success" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded text-green-500 border border-green-500">
        {children}
      </span>
    : variant == "danger" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded text-red-500 border border-red-500">
        {children}
      </span>
    : variant == "warning" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded text-yellow-500 border border-yellow-500">
        {children}
      </span>
    : variant == "info" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded text-orange-500 border border-orange-500">
        {children}
      </span>
    : variant == "purple" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded text-violet-500 border border-violet-500">
        {children}
      </span>
    : variant == "dark" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded text-gray-700 dark:text-gray-300 border border-gray-500">
        {children}
      </span>
    :
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded text-blue-500 border border-blue-500">
        {children}
      </span>
  )
}
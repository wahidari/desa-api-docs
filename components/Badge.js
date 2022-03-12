export default function Badge({ variant, children }) {

  return (
    variant == "success" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded bg-green-200 text-green-600">
        {children}
      </span>
    : variant == "danger" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded bg-red-200 text-red-600">
        {children}
      </span>
    : variant == "warning" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded bg-yellow-200 text-yellow-500">
        {children}
      </span>
    : variant == "info" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded bg-orange-200 text-orange-600">
        {children}
      </span>
    : variant == "dark" ?
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded bg-gray-200 text-gray-700">
        {children}
      </span>
    :
      <span className="text-sm font-semibold mr-2 px-2 py-1 rounded bg-blue-200 text-blue-600">
        {children}
      </span>
  )
}
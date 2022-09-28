import "./loading.scss"
import ReactLoading from "react-loading"

export function Loading() {
  return (
    <div className="loading-div">
      <ReactLoading type="bubbles" color="#3e6ff4" width="128px" height="128px" />
    </div>
  )
}

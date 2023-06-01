import toast from 'react-hot-toast'

const styles_notifications = {
  position: "bottom-right",
  style: {
    backgroundColor: "black",
    color: "#f1f1f1"
  }
}

export default function handleNOtifications(notification) {
  switch(notification){
    case "error_search" :
      toast.error("Include the artist, please.", styles_notifications)
      break
    case "no_existence" :
      toast.error("Album no founded.", styles_notifications)
      break
    case "existence" :
      toast.success("Album encountered. Web paged.", styles_notifications)
      break
  }
}
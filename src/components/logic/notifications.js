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
    case "no_existence" :
      toast.error("Write the artist's name, please", styles_notifications)
      break
    case "existence" :
      toast.success("Good option! Changin web", styles_notifications)
      break
  }
}
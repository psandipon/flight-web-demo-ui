import { reactive } from "vue";
import { NotificationType, Notification } from "@/types";

const notification: Notification = reactive({
  show: false,
  type: NotificationType.info,
  title: "",
  description: "",
});

const useNotification = () => {
  const notify = (type: NotificationType) => {
    return (title: string, description: string) => {
      notification.show = true;
      notification.type = type;
      notification.title = title;
      notification.description = description;
      setTimeout(() => {
        notification.show = false;
      }, 5000);
    };
  };
  const showInfo = notify(NotificationType.info);
  const showSuccess = notify(NotificationType.success);
  const showWarning = notify(NotificationType.warning);
  const showError = notify(NotificationType.error);

  return { notification, showInfo, showSuccess, showWarning, showError };
};

export default useNotification;

import { useState, useEffect, useRef } from "react";
import defaultAxios from "axios";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    console.log(element.current);
    //componentDidMount
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      //componentWillUnMount
      if (element.current) {
        element.current.removeListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (!onCancel || typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export const usePreventLeave = () => {
  // useEffect(() => {
  const listener = (e) => {
    e.preventDefault();
    return (e.returnValue = "");
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return { enablePrevent, disablePrevent };
  // }, []);
};

export const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") return;

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") return;

    if (element.current) {
      const { current } = element;
      console.log("current", current);
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export const useNetwork = (onChange) => {
  const [ofStatus, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange !== "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return ofStatus;
};

export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    console.log("x", window.scrollX, "y", window.scrollY);
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = (e) => {
    if (element.current) {
      if (element.current.requestFullscreeen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreeen) {
        element.current.mozRequestFullScreeen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
    }
    runCb(true);
  };

  const exitFull = () => {
    document.exitFullscreen();

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};

export const useNotification = (title, option) => {
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        console.log(permission);
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };

  useEffect(() => {
    if (!"Notification" in window) {
      alert("This browser does not support desktop notification");
      return;
    }
  }, []);
  return fireNotif;
};

export const useAxios = (option, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ isLoading: true, ...state });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!option.url) return;
    axiosInstance(option)
      .then((data) => {
        setState({ ...state, isLoading: false, data });
      })
      .catch((error) => {
        setState({ ...state, isLoading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

import { useMediaQuery } from "@chakra-ui/react";

const useIsMobile = () => {
  const [isMobileView] = useMediaQuery("(max-width: 767px)"); // 768px adalah breakpoint mobile
  return isMobileView;
}

export default useIsMobile;
import { Variants } from "framer-motion"

export const iconsVariantsLeft: Variants = {
  offscreen: {
    x: -50,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8
    }
  }
}

export const iconsVariantsRight: Variants = {
  offscreen: {
    x: 50,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const fadeIn: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1
  }
}

export const fadeInDelayContainer: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const slideToRight: Variants = {
  offscreen: {
    x: -500,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

export const slideToLeft: Variants = {
  offscreen: {
    x: 500,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

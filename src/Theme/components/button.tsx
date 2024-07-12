const Button = {
  // style object for base or default style
  baseStyle: {
    w: "max-content",
    fontWeight: "600",
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 6, 
    },
    lg: {
      fontSize: "md",
    }
  },

  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      paddingX: 6, // horizontal padding
      paddingY: 3, // vertical padding
      border: '2px',
      borderColor: 'primary.500',
      color: 'primary.500',
      borderRadius: '35px',
      _hover: {
        borderColor: 'primary.600',
      },
    },
    ghost: {
      _hover: {
        borderColor: 'primary.600',
      },
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: {
      base: "sm",
      lg: "lg",
    },
    variant: 'outline',
    colorScheme: '',
  },
};

export default Button;

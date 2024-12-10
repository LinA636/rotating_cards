import { useBreakpointValue } from "@chakra-ui/react";

// Breakpoint configuration for different screen sizes
export const breakpoints =({
    sm: '440px', // Small devices (phones)
    md: '768px', // Medium devices (tablets)
    lg: '1024px', // Large devices (desktops)
    xl: '1200px', // Extra large devices (large desktops)
    '2xl': '1400px', // 2x large devices (extra large desktops)
});

const getBreakpoints = (variant) => {
    const baseConfig = { base: true };
    if (variant) {
        baseConfig[variant] = false;
    }
    return baseConfig;
}

// Custom hook to determine if the device is small
export const useIsSmallDevice = (variant) => {
    const breakpoints = getBreakpoints(variant)
    return useBreakpointValue(breakpoints)
}

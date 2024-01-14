
export default function BackgroundGradient( props: { from: string, via: string, to: string, blur?: string, className?: string } ) {
    const blur = props.blur === undefined ? "blur-[118px]" : props.blur
    const className = props.className === undefined ? "" : props.className
    return (
        <div
            className={`absolute inset-x-0 m-auto h-80 max-w-lg bg-gradient-to-tr ${props.from} ${props.via} ${props.to} ${blur} opacity-50 -z-1 ${className}`}></div>
    )
}
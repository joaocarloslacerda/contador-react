import { ButtonHTMLAttributes } from "react"
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export const Button = ({onClick, children }: ButtonProps) => {
    return <button className="button" onClick={onClick}>{children}</button>
}
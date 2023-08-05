import './mylabel.css';
export interface MyLabelProps {
    /**
   * Este mensaje es el que se va a usar en la etiqueta
   */
    label: string;
    /**
   * Este es el tamaño por defecto del label
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizar toda la palabra
     */
    allCaps?: boolean;
    /**
     * Colores del basicos del boton
     */
    color?: 'primary' | 'secundary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;

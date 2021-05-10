import {ReactNode, Component, MouseEvent} from 'react';

interface ButtonProps {
    text?: string;
    enabled?: boolean;
    onClick?: (() => void);
}
export default class Button extends Component<ButtonProps, unknown>{
    
    public constructor(props: ButtonProps) {
        super(props);

        this.buttonOnClick = this.buttonOnClick.bind(this);
    }
    
    public render(): ReactNode {
        return (
            <button disabled={this.props.enabled === false} onClick={this.buttonOnClick}>{this.props.text || ''}</button>
        );
    }

    private buttonOnClick(e: MouseEvent): void {
        console.log(`OnClick: (${e.screenX}, ${e.screenY})`);
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}
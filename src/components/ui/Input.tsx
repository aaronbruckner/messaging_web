import {ReactNode, Component, ChangeEvent} from 'react';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

export default class Input extends Component<InputProps, unknown> {

    public constructor(props: InputProps) {
        super(props);

        this.inputOnChange = this.inputOnChange.bind(this);
    }

    public render(): ReactNode {
        return (
            <input value={this.props.value} onChange={this.inputOnChange}/>
        );
    }

    private inputOnChange(event: ChangeEvent<HTMLInputElement>) {
        this.props.onChange(event.target.value || '');
    }
}
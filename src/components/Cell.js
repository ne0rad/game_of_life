import '../styles/Cell.css';

export default function Cell({ alive }) {
    return (<div className={alive ? 'cell alive' : 'cell'}>

    </div>)
}

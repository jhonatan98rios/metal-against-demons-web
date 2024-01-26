
export function PactComponent({ title, subtitle, done }) {

    return (
        <div className={`
            p-6 border-l-[20px] border-l-[#3F3256] my-4 bg-slate-400 
            w-[580px] ${ done ? 'bg-done-pact' : 'bg-undone-pact' }
        `}>
            <h3 className="text-3xl font-bold"> {title} </h3>
            <p className="text-xl"> {subtitle} </p>
        </div>
    )
}
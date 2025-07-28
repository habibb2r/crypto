
const SectionTitle = ({title} : {title: string}) => {
    return (
        <div className="py-5">
            <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-[#FF7800] to-[#FFE601] bg-clip-text text-transparent">{title}</h1>
        </div>
    );
};

export default SectionTitle;
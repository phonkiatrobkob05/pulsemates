function PulsemateBP(){
    return (
        <div className="flex flex-col h-full justify-center items-center bg-gray-100 pt-12">
            <h1 className="text-2xl font-bold text-[#60bed7]">Pulsemate BP</h1>
            <p id="user" className="text-lg text-gray-700">This is PulsemateBP</p>
            <div className="flex flex-col sm:flex-row">
                <img src="/pulsemate_bp.png" alt="PulsemateBP" className="sm:w-1/2" />
                <img src="/pulsemate_stetho.png" alt="PulsemateSteth" className="sm:w-1/2" />
            </div>
        </div>
    );
}export default PulsemateBP;
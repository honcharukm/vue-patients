const getPatcients = async () => {
    const request = await fetch("https://cerber.pixel.com.pl/api/patients");
    return await request.json();
};

const getMedicine = async () => {
    const request = await fetch("https://cerber.pixel.com.pl/api/medicine");
    return await request.json();
};

export default async () => {
    const [patients, medicine] = await Promise.all([getPatcients(), getMedicine()])

    const concatPatientsWithMedicine = patients.map((patient) => {
        const { id } = patient
        
        const patientsMedicine = medicine
            .filter((m) => m.patientIds.includes(id))
            /*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
            .map(({patientIds, ...m}) => m)

        return { ...patient, medicines: patientsMedicine };
    })

    return concatPatientsWithMedicine
}
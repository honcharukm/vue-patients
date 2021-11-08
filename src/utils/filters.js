export const more30Filter = (patients) => patients.filter((p) => p.age >= 30)

export const less63andStrengthMore8Filter = (patients) => patients.reduce((acc, patient) => {
    if (patient.age <= 63) {
      const medicines = patient.medicines.filter((m) => m.strength >= 8);

      if (medicines.length > 0) {
        return [...acc, { ...patient, medicines }];
      }
    }

    return acc;
  }, [])
export const insuranceAspects = [
  {
    title: "Risk Transfer",
    description:
      "Insurance is a mechanism for transferring the financial risk associated with unexpected events or losses to an insurance company. Policyholders pay a relatively small premium to the insurer in exchange for the insurer assuming the responsibility of covering larger, unexpected costs.",
  },
  {
    title: "Policy",
    description:
      "The insurance contract, known as a policy, outlines the terms and conditions of the coverage, including what events are covered, the coverage limits, the premium amount, and any deductibles. It is a legally binding document that governs the insurance relationship.",
  },
  {
    title: "Premium",
    description:
      "Policyholders pay regular premiums to the insurance company. The premium amount can vary depending on factors like the type of insurance, the amount of coverage, the policyholder's risk profile, and the insurer's pricing model.",
  },
  {
    title: "Coverage",
    description:
      "Insurance coverage refers to the specific protection provided by the insurance policy. The coverage may include protection against various risks, such as accidents, illnesses, damage to property, liability claims, and more.",
  },
  {
    title: "Claim",
    description:
      "When an insured event occurs (such as a car accident, a medical expense, or property damage), the policyholder or a beneficiary can file a claim with the insurance company to receive compensation or benefits as per the terms of the policy",
  },
  {
    title: "Beneficiary",
    description:
      "The beneficiary is the person or entity entitled to receive the insurance proceeds in the event of a covered loss. For example, in life insurance, the beneficiary is typically a family member or designated individual who receives the death benefit.",
  },
  {
    title: "Underwriting",
    description:
      "Insurance companies assess the level of risk presented by each policyholder to determine the appropriate premium rates and coverage terms. This process is called underwriting.",
  },
  {
    title: "Quote",
    description:
      "Quote refers to an estimate or proposal provided by an insurance company to a potential customer (policyholder) that outlines the expected cost of an insurance policy and the coverage it offers.",
  },
];

export const motorInsurance = [
  {
    term: "Cover Type",
    description:
      "Cover type or coverage type refers to the specific type of insurance protection or coverage that a policyholder has selected for their vehicle. Different coverage types offer protection against different risks and events, and policyholders can choose the coverage types that best suit their needs and budget.",
    types: [
      {
        name: "Comprehensive Coverage",
        description:
          "Comprehensive coverage is a type of insurance that provides protection for damage to your own vehicle from causes other than collisions with other vehicles or objects. Comprehensive coverage, protects your vehicle from a wide range of non-collision-related risks, including but not limited to:",
        examples: [
          "Theft",
          "Vandalism",
          "Fire",
          "Natural disasters (e.g., hail, floods, earthquakes)",
          "Falling objects (e.g., tree branches)",
          "Animal collisions (e.g., hitting a deer)",
        ],
      },
      {
        name: "Third Party Coverage",
        description:
          "Third-party coverage typically refers to liability coverage that pays for injuries or damages to other parties involved in an accident you are responsible for. This is often mandatory in many places to ensure that victims of accidents are compensated.",
      },
      {
        name: "Third Party, Fire and Theft Coverage",
        description:
          'Third Party, Fire and Theft (TPFT) is a type of motor insurance coverage that offers protection beyond the basic Third-Party only coverage but falls short of the comprehensive "Full Coverage" insurance. TPFT insurance provides the following types of coverage:',
        types: [
          {
            name: "Third-Party Coverage",
            description:
              "TPFT insurance includes the same third-party liability coverage as TPO insurance. This means it covers your legal liability for injuries to other people (third parties) and damage to their property if you are responsible for an accident. This is a fundamental component of motor insurance and is often legally required in most places.",
          },
          {
            name: "Fire Damage Coverage",
            description:
              "TPFT insurance extends coverage to protect your vehicle in case it is damaged or destroyed by fire. This coverage is valuable as it provides financial protection in the event of a fire-related incident, such as a vehicle fire or damage caused by a fire in your vicinity.",
          },
          {
            name: "Theft Coverage",
            description:
              "TPFT insurance also covers the theft of your vehicle or theft-related damage, such as damage resulting from a break-in. If your vehicle is stolen or damaged during a theft attempt, this coverage can help you recover the financial loss.",
          },
        ],
      },
    ],
  },
  {
    term: "Duration",
    description:
      "This represents the start and end dates of the insurance contract, dictating the duration of coverage and the obligations and benefits associated with the policy. The duration of motor insurance is a critical aspect of the policy, and it's essential to be aware of the start and end dates to ensure continuous coverage.",
  },
  {
    term: "Vehicle Use",
    description:
      "Vehicle use refers to the specific purpose for which a vehicle is primarily used, and it plays a crucial role in determining the type of insurance coverage, premium rates, and the risk profile associated with the vehicle. The primary categories of vehicle use include:",
    types: [
      {
        name: "Private Use",
        description:
          "This category applies to vehicles used for personal, non-business purposes. If your vehicle is primarily used for commuting to work, running errands, and personal transportation, it falls into the personal use category",
      },
      {
        name: "Commercial Use",
        description:
          "Commercial use typically applies to vehicles used for specific commercial purposes, such as transport trucks, delivery vans, taxis, or vehicles used in the transportation of goods for compensation. Specialized commercial insurance is usually required for these vehicles.",
      },
    ],
  },
  {
    term: "Risk Type",
    description:
      "Risk Type (also known as vehicle type) refers to the classification of vehicles based on their characteristics, which can affect the cost of insurance and the level of risk associated with insuring them. These classifications help insurance companies determine appropriate premium rates and coverage terms. The type of vehicle is a significant factor in assessing the risk, as certain vehicle characteristics are associated with higher accident rates or more extensive damage in case of accidents.",
  },
  {
    term: "Number of Seats",
    description:
      "This refers to the count of passenger seats in a vehicle. This information is one of the factors that insurance companies use to assess the type of vehicle, determine the risk profile, and calculate insurance premiums. The number of seats is significant because it can affect the vehicle's capacity to carry passengers and its potential risk in the event of an accident.",
  },
  {
    term: "Amount Insured/Sum Insured",
    description:
      "This refers to the maximum coverage limit or the total monetary value that an insurance policy will pay out in the event of a covered loss or claim related to your insured vehicle. In other words, it is the maximum amount of money the insurance company will provide to cover the costs associated with specific events, such as accidents, theft, or damage to your vehicle.",
  },
];

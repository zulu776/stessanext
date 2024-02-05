type Profile = {
  url?: String;
  name?: String;
  address?: String;
  id?: String;
  document: String;
  documentType: String;
  phone?: String;
  type: String;
  cityId?: String;
};

const updateUserTransformation = (profile: Profile) => {
  const data = {
    where: {
      id: profile.id,
    },
    data: {
      image: profile.url,
      name: profile.name,
      profile: {
        upsert: {
          create: {
            document: profile.document,
            documentType: profile.documentType,
            type: profile.type,
            address: profile.address,
            cityId: profile.cityId,
            phone: profile.phone,
          },
          update: {
            document: profile.document,
            documentType: profile.documentType,
            type: profile.type,
            address: profile.address,
            cityId: profile.cityId,
            phone: profile.phone,
          },
        },
      },
    },
  };

  return data;
};

export default updateUserTransformation;

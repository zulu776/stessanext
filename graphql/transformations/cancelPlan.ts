type CancelPlan = {
  id: String;
  isCanceled: Boolean;
  cancellationDate: String;
  roleId: String;
};

const cancelPlanTransformation = (cancelPlan: CancelPlan) => {
  const data = {
    where: {
      id: cancelPlan.id,
    },
    data: {
      isCanceled: cancelPlan.isCanceled,
      cancellationDate: cancelPlan.cancellationDate,
      //   '2023-01-22T13:26:56.590Z',
      user: {
        update: {
          roleId: cancelPlan.roleId,
        },
      },
    },
  };

  return data;
};

export default cancelPlanTransformation;

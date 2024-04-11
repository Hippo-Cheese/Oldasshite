const calculateTimeDifference = () => {
    const currentDate = new Date();
    const inputDateTime = new Date(`${year}-${month}-${day}`);

    const timeDifference = currentDate.getTime() - inputDateTime.getTime();
    const differenceInYears = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 365)
    );
    const remainingMonths = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30.5)
    );
    const remainingDays = Math.floor(
      ((timeDifference % (1000 * 60 * 60 * 24 * 365)) %
        (1000 * 60 * 60 * 24 * 30.5)) /
        (1000 * 60 * 60 * 24)
    );

    setDateDifference({
      year: differenceInYears,
      month: remainingMonths,
      day: remainingDays,
    });
  };
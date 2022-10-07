//ToDo apsibrezti vartotojus (objektai- vardas, sutikimo versija);
//masyvas1- vartotojai sutike su x versija ir vartotojai nesutike su x versija;
//masyvas2- vartotojai visiskai nesutike su privatumo politika

const getConsumers = (consumerCount = 0) => {
  const consumers = [];

  //=null - tai reiskia, kad eigoje mes zinoma turesim vartotojus, kurie tures parametrus kitus, po jeigu kartai netures tai ju parametras automatiskai bus 0.
  function Consumer(firstName, agreedPrivacyPolicyVersion = null) {
    this.firstName = firstName;
    this.agreedPrivacyPolicyVersion = agreedPrivacyPolicyVersion;
  }

  const getRandomName = (randomNumber) => {
    switch (randomNumber) {
      case 0:
        return "Tomas";
      case 1:
        return "Jonas";
      case 2:
        return "Andrius";
      case 3:
        return "Petras";
      case 4:
        return "Kazys";
      case 5:
        return "Kamile";

      default:
        return null;
    }
  };

  for (let index = 0; index < consumerCount; index++) {
    const randomNumber = Math.round(Math.random() * 5);
    const firstName = getRandomName(randomNumber);
    const agreedPrivacyPolicyVersion =
      randomNumber <= 0.1 ? null : randomNumber + 0.1;

    const consumer = new Consumer(firstName, agreedPrivacyPolicyVersion);

    consumers.push(consumer);
  }
  return consumers;
};

const consumers = getConsumers(50);
const consumersAgreedToPrivacyPolicyVersionX = [];
const consumersNotAgreedToPrivacyPolicyVersionX = [];
const consumersNotAgreedToPrivacyPolicy = [];

consumers.forEach((consumer) => {
  //   if (consumer.agreedPrivacyPolicyVersion > 3) {
  //     consumersAgreedToPrivacyPolicyVersionX.push(consumer);
  //   } else if (consumer.agreedPrivacyPolicyVersion === 0) {
  //     consumersNotAgreedToPrivacyPolicy.push(consumer);
  //   } else {
  //     consumersNotAgreedToPrivacyPolicyVersionX.push(consumer);
  //   }

  if (consumer.agreedPrivacyPolicyVersion > 3) {
    consumersAgreedToPrivacyPolicyVersionX.push(consumer);
    return;
  }
  if (consumer.agreedPrivacyPolicyVersion === null) {
    consumersNotAgreedToPrivacyPolicy.push(consumer);
    return;
  }
  consumersNotAgreedToPrivacyPolicyVersionX.push(consumer);
});

console.log({
  consumersAgreedToPrivacyPolicyVersionX,
  consumersNotAgreedToPrivacyPolicyVersionX,
  consumersNotAgreedToPrivacyPolicy,
});

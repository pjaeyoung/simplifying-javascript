const sailingClub: string[] = ['yi hong', 'andy', 'darcy', 'jessi', 'alex', 'nathan'];

for (let member of sailingClub) {
  sendEmail(member);
}

sailingClub.forEach(sendMail);

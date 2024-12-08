import regression from './assets/img/regression.png';

const paragraph0Items = [
  { text: "In 2014, Michael Brown, an unarmed 18-year-old black man, was fatally shot by Darren Wilson, a white police officer. While the officer stated that he fired his weapon during a violent altercation, some witnesses said that Brown was raising his hands completely as a gesture of surrender. As more information was disclosed, this incident provoked several nights of fiery riots, weeks of national protests, and discussions about the relationship between race, crime, and policing practices. This led to the escalation of the Black Lives Matter movement and brought issues of police accountability into mainstream discourse. As a response to the increased pressure for transparency, policymakers started to consider equipping officers with body cameras.", 
    className: "body-text-normal" }
];

const paragraph1Items = [
  { text: "Between 2015 and 2024, six states, including New Jersey, New Mexico, South Carolina, Colorado, Connecticut, and Illinois, decided to adopt a state-level law enforcing body cameras for police officers. The proponents argue that the cameras could boost the accountability of police officers and public confidence in the police. However, the impact of these policies on the number of people killed by police remains uncertain.",
    className: "body-text-normal" }
];

const heading1 = "Does the state-level law enforcement of body cameras affect the number of people killed by police?"

const paragraph2Items = [
  { text: "To explore this question, I decided to run a linear regression based on the Police Shooting Database maintained by The Washington Post. From 2015 up until today, the Post has been archiving every person shot and killed by an on-duty police officer in the United States. The dataset was well organized and easy to pre-process. However, one of the biggest challenges I faced was to find out whether the state has adopted and enforced state-level body cams or not. For each state that has adopted the laws related to body cam, I went through specific bills passed by each state and did my best to find out which specific date it was enforced. The information is integrated into the dataset as a treatment variable, and the whole dataset contains records from the seven states. As for the confounding variables, it was relatively straightforward to gather data on whether the governor was a Democrat and whether the state legislature had a Democratic majority at the relevant time. Both of these variables are also incorporated into the dataset.",
    className: "body-text-normal" }
];

const paragraph3Items = [
  { text: "The reasons for including those two confounding variables are as follows. The political orientation of the state's governor is relevant because progressive or Democratic governors might be more likely to push for police reforms, including body camera enforcement. This variable may also directly influence police behavior, as officers might feel increased pressure to act with greater accountability under a leadership that prioritizes human rights. A Democratic majority may pass policies enforcing body cameras with more ease. Also, similar to the governor variable, it may also directly affect police behavior.",
    className: "body-text-normal" }
];

const paragraph4Items = [
  { text: "I conducted a linear regression using R, a computer language designed mainly for statistics. The model aims to predict the rate of police killings per million residents (num_killed_per_million) based on three variables: law_enforcement (whether the state enforces body camera laws), dem_majority (whether the state legislature has a Democratic majority), and dem_gov (whether the state has a Democratic governor).",
    className: "body-text-normal" }
];

const paragraph5Items = [
  { text: "Constant (0.236, p < 0.01): The intercept represents the expected number of people killed by police per million residents when all explanatory variables (law_enforcement, dem_majority, and dem_gov) are equal to zero. In this case, it means that the baseline expected number is 0.236 in the absence of these political and legal factors.",
    className: "body-text-normal" }
];

const paragraph6Items = [
  { text: "Law Enforcement (0.144, p < 0.01): The coefficient for law_enforcement is 0.144, which means that after a relevant law enforcement policy is implemented, the number of people killed by police per million residents is expected to increase by about 0.144 on average, all else being equal. The p-value is less than 0.01, indicating that this variable is statistically significant at the 1% level. This means that there is strong evidence that law enforcement policies have a meaningful effect on increasing the number of people killed by police.",
    className: "body-text-normal" }
];

const paragraph7Items = [
  { text: "Democratic Majority (0.081, p < 0.05): The coefficient for dem_majority is 0.081, suggesting that in states with a Democratic legislative majority, the number of people killed by police per million residents increases by 0.081 on average. This positive effect is statistically significant, indicating that states with a Democratic legislative majority tend to have a slightly higher rate of fatalities.",
    className: "body-text-normal" }
];

const paragraph8Items = [
  { text: "Democratic Governor (0.22, p < 0.01): The coefficient for dem_governor is 0.22, suggesting that the presence of a Democratic governor is associated with an increase of about 0.22 in the number of people killed by police per million residents, on average. The p-value here is incredibly small, indicating that this result is statistically significant at any conventional level. Therefore, there is very strong evidence that the presence of a Democratic governor is associated with higher numbers of police killings.",
    className: "body-text-normal" }
];

const paragraph9Items = [
  { text: "R² (0.093): The R² value represents the proportion of variance in the dependent variable (number of people killed per million residents) explained by the independent variables. In this case, the R-squared is 0.093, meaning that the model explains about 9.3% of the variation in the number of people killed by police. While this might seem low, it is not uncommon for social science data, where many factors outside of the model influence the outcome.",
    className: "body-text-normal" }
];

const paragraph10Items = [
  { text: "As identified above, the coefficient on the treatment variable from model 1 is 0.144 (Code B). It means that the number of people killed by police per million residents is expected to increase by about 0.144 on average when the law is enforced. This result is quite unexpected since the main reason behind adopting the law is to reduce fatalities. One possible explanation is that there are time-varying confounders other than Democratic governor and Democratic state legislature that I failed to include in the analysis. In this case, their correlation with the treatment and the outcome will lead to a bias in the estimates.",
    className: "body-text-normal" }
];

const paragraph11Items = [
  { text: "In conclusion, it is not easy to determine whether the adoption was successful or not solely based on a single statistical analysis. More research is needed!",
    className: "body-text-normal" }
];

const image0Props = {
  image: regression,
  imageAlt: "Regression Analysis",
  className: "wide"
}

const paragraphItems = [paragraph0Items, paragraph1Items, paragraph2Items, paragraph3Items, paragraph4Items, paragraph5Items, paragraph6Items, paragraph7Items, paragraph8Items, paragraph9Items, paragraph10Items, paragraph11Items]
const imageProps = [image0Props]
const headingItems = [heading1]

export {paragraphItems, imageProps, headingItems}


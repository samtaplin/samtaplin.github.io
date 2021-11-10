import * as React from 'react';
import JupyterViewer from "react-jupyter-notebook";
import clustering from "./clustering.json";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const styles = {
    accord: {
        width: '60vw',
        backgroundColor: '#E7EAEE',

    }
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Blog() {
  const [value, setValue] = React.useState('recents');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      <Box sx={
        {
          width: '90vw',
          height: '50.625vw', /* height:width ratio = 9/16 = .5625  */
          margin: 'auto',
          position: 'absolute',
          top:'0',
          bottom:'0', /* vertical center */
          left:'0',
          right:'0', /* horizontal center */
            backgroundColor: '#BDBBB0',
            zIndex: 'left'
      }}>
        <div className='header' href="/">
        <b className='name'>Blog</b>
        </div>
        <Container maxWidth="xl"  sx={
          {
              backgroundColor: '#BDBBB0',
        }}>
        <Grid container spacing={2} direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item xs={12}>
        <Typography variant='h6'>2021:</Typography>
        </Grid>
        <Grid item xs={12}>
        <Accordion style={styles.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography align='center' variant='h4'>A K-Means Clustering of Authoritarian Rulers</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <React.StrictMode>
          <JupyterViewer rawIpynb={clustering}/>
          </React.StrictMode>
          </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={12}>
        <Typography variant='h6'>2020:</Typography>
        </Grid>
        <Grid item xs={12}>
        <Accordion style={styles.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography align='center' variant='h4'>How hard is it to build housing in Berkeley? The slow death of 2211 Harold Way.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p>&emsp;&emsp;Last month, Berkeley announced it wouldn’t give the developers of the 18-story apartment complex planned for Harold Way more time to secure funding for the project, officially sinking it. For a project initially approved in 2015, that outcome is incredibly disappointing. However, if anything, the most surprising thing about the project is that it limped on so long. Why? Here’s a timeline of every hurdle thrown in front of the developers:</p>
            <ul>
<li>Hill State Realty, the developers, first proposed building the $75 million, 355 apartment building in <a href='https://www.berkeleyside.org/2012/12/21/first-highrise-in-40-years-proposed-for-downtown-berkeley'>late 2012.</a></li>
<li>In March 2013, the city Zoning Commission called the project <a href='https://www.berkeleyside.org/2013/03/19/early-high-rise-plans-lack-inspiration-say-commissioners'>“pretty cold”, inelegant, “lacking in grace”</a>, and insisted that Shattuck Cinemas, currently on the property, be kept.</li>
<li>In response, Hill State Realty <a href='https://www.berkeleyside.org/2013/06/26/developers-put-theaters-back-into-berkeley-high-rise-plans'>agreed</a> to redevelop the theater and redesign the building, hoping to have it open by 2018.</li>
<li>In 2014, then councilmember Arreguin proposed a ballot measure that would have made it <a href='https://www.berkeleyside.org/2014/07/22/at-b-side-implications-of-berkeleys-downtown-initiative'>“financially infeasible</a> to build anything higher than 60 feet” in Berkeley by tightening environmental, design, transportation and affordable housing requirements, as well as adding new fees. The measure would have killed the project, but it was resoundingly defeated by voters.</li>
<li>The developers agreed to use <a href='https://www.berkeleyside.org/2014/10/31/high-rise-developer-in-berkeley-to-use-100-union-labor'>100% union labor.</a></li>
<li>Opponents of the project protested the fact that a corner of the building would block <a href='https://www.berkeleyside.org/2014/11/18/locals-question-berkeley-plaza-impact-on-theater-view'>part of the Bay view</a> from campus’ Campanile. They tried to make the view from the campanile a historical landmark to prevent the project, but <a href='https://www.berkeleyside.org/2015/04/06/view-from-uc-berkeley-campanile-cannot-be-landmarked'>fell short</a> of the votes they needed at the Landmarks preservation commission.</li>
<li>The Zoning Adjustments Board (ZAB) voted to approve the environmental impact report and community benefits package for the property.</li>
<li>Berkeley residents appealed to city council to overturn the landmarks decision and make the campanile view a historic landmark. Council <a href='https://www.berkeleyside.org/2015/07/01/council-upholds-decision-not-to-landmark-campanile-way'>narrowly denied</a> the appeal.</li>
<li>The applicants agreed to build <a href='https://www.berkeleyside.org/2015/07/30/new-plan-calls-for-10-theaters-at-2211-harold-way'>10</a> new theaters, instead of six, to earn approval from the <a href='https://www.berkeleyside.org/2015/08/14/harold-way-project-gets-landmarks-commission-approval'>landmarks commission.</a></li>
<li>ZAB approved the overall project, but required an <a href='https://www.berkeleyside.org/2015/10/01/zab-approves-harold-way-use-permit-with-increased-affordable-housing-provision'>additional $4.5 million</a> affordable housing contribution from the project, on top of the $6 million it was already contributing.</li>
<li>After <a href='https://www.berkeleyside.org/2015/12/09/berkeley-approves-construction-of-harold-way-high-rise'>37 public meetings</a> and three years, city council finally approved the project, finally settling on requiring $10.5 million in affordable housing contributions, $1 million in arts funding, ten new theaters from the applicants and $6 million in union labor costs.</li>
<li>In 2016, opponents of the project <a href='https://www.berkeleyside.org/2016/01/14/lawsuit-filed-to-stop-building-of-harold-way-complex'>sued</a> on ostensible environmental grounds. The suit was eventually <a href='https://www.berkeleyside.org/2016/10/20/judge-tosses-out-legal-challenge-to-berkeley-high-rise'>dismissed</a> by a judge at the end of the year.</li>
</ul>
<p>
In total, the project had to survive 37 (37!!!)public meetings, one ballot measure, a historical landmarks dispute and a lawsuit. 37 meetings. It only managed to do so by agreeing to offer $23 million in extra community benefits. The entire process took four years. By the time the project was fully approved, construction costs were higher and investor enthusiasm more lukewarm. Increased construction costs and the extra $23 million of costs on top killed the project. The development would've offered Berkeley 300 badly needed units of environmentally friendly, transit-oriented housing, $10 million dollars in affordable housing funding, a new state of the art movie theater and extra arts funding. Instead, we got nothing.</p>
<p>Opponents of the project gave it a death by a thousand cuts. Delays, lawsuits, frivolous historical landmark claims and a militant insistence on demanding ever more concessions from the developer were in practice an outright denial. Even more gallingly, opponents of the building circumvented the clear and democratically-expressed will of Berkeley’s voters, who voted overwhelmingly to authorize the development through a ballot measure in 2010, and again by rejecting Arreguin’s 2014 ballot measure.</p>
<p>California suffers from exorbinant rents and homeprices, mass homelessness, inadequate transportation infrastructure, and a warming climate that has unleashed yearly wildfires on its residents. None of these problems can be solved without making it far easier to build things.
And if we want to make it easier to build things, we'll have to settle for imperfection. Not everything must come with union labor, affordable housing funds, support for the arts, theaters, views, and below-market units. Until we overcome resource scarcity, we can’t have it all, all the time. If Berkeley wants to solve any of its problems, we’ll sometimes have to settle for projects that aren’t perfect, but rather, good enough.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Accordion style={styles.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography align='center' variant='h4'>In politics, character still matters.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p>In contemporary American politics, raising questions of personal character can seem almost ridiculous. Political actors continue to level attacks on the basis of character, but on both sides of America’s political/cultural chasm, there seems to be a growing emphasis on ideological purity (or at least having the right policy preferences and cultural stances) over the personal morals of a politician. The right has thrown their political fortunes in with Donald Trump, a man whose name is quickly becoming synonymous with all the worst impulses of human nature. I think it suffices to say that he is character-deficient in so many different ways that it almost defies belief. He has elevated increasingly avaricious, cruel, and sycophantic subordinates to positions of high office. Meanwhile, among American liberals and the left more broadly, it has become somewhat unfashionable to speak of character, personal virtues, or morals. The old right appealed to terms like ‘virtue’ and ‘character’ to browbeat women, gay people, and the non-religious. Liberals, careful to avoid association with the Jerry Fallwells of the world, stay away from those sort of loaded terms. Besides, relying on personal ethics in government seems to defy our intuitive ideas about progress. In a modern liberal democracy, shouldn’t we be able to keep the fate of government insulated from the unpredictable dynamics of human personality?</p>
            <p>In fact, the pioneers of modern liberal democracies aimed to create a system of government that functioned as well as possible irrespective of the leaders at its helm. The framers of the US constitution separated the powers of their new government into distinct branches with different interests and hoped to play ambition off ambition to prevent any one leader from abusing power. Madison and Hamilton designed America’s constitution specifically to foil a president like Trump. Meanwhile, liberal democrats enumerated a set of fundamental human rights and placed them above the dictates of democratic sentiment. On top of these foundational principles, most liberal democracies include an array of supervisory courts, ethics watchdogs, auditors, and inspectors-general. Unfortunately, though liberal democracies are undoubtedly better designed than less pluralistic systems, no system of government, however well-conceived, has escaped scandal and abuse of office by unscrupulous leaders. Ultimately, despite our best efforts and centuries of constitutional experimentation and thought, the dictates of national security and the power of public opinion make the good character of leaders the only possible guarantee of good governance.</p>
            <p>In the absence of an authority powerful enough to end conflicts between states, national governments are the only institutions capable of maintaining the security of their citizens. And in the absence of divine protection, national governments are the only institutions capable of plausibly attempting to protect their citizens from a natural catastrophe. War and natural crises make strict adherence to a doctrine of fundamental rights impossible. In war, governments must force their young citizens to leave their families and lay down their lives in service of the state. They must plan the organized mass killing of the young men and women they’re fighting against. War always demands secrecy, deception, and sacrifice. Machiavelli famously argued that when the security of a state is threatened, its leader must be willing to countenance immoral actions when necessary. A leader of good character will violate ethical principles only as much as he has to, as Abraham Lincoln did during the American Civil War. A leader of bad character sees war as an opportunity. He will take opportunistic revenge on his opponents at home, consolidate power and reshape government to his advantage. And fortunately for such a leader, as Mearsheimer found in a comparative study of wartime emergency measures, the public of democratic nations are likely to forgive all sorts of ethical abuses when governments respond to national security threats. Only her own conscience can restrain a wartime leader. Natural disasters can offer similar freedom to immoral leaders. Governments must decide where to direct lifesaving aid and resources. In some crises, including the current coronavirus pandemic, governments must take on extraordinary powers that violate the normal constitutional rights of its citizens. Each of these powers is ripe for abuse, and Hungary’s Viktor Orban for one quickly took advantage, eliminating funding to opposition parties and shuttering the last vestiges of independent media. American democracy has survived over 200 years of leaders with very different characters. While our constitutional structure probably deserves some credit for the longevity of our democracy, America’s relative safety from interstate conflict is undoubtedly a major factor. It also so happened that during the most destructive conflict in American history, the civil war, the US had the good fortune of finding a highly ethical leader in Abraham Lincoln.</p>
            <p>In liberal democracies, public opinion both delivers leaders into and removes them from political power. Ideally, public opinion should provide accountability for leaders and help discourage abuses of office. And yet, just as often, immoral leaders harness public opinion to overcome the constitutional and ethical limits imposed on them. Unfortunately, public opinion is opinion, not truth. While factual truth, the truth of what happened, (as described by Arendt) has the power to change the minds of those who can grasp it, leaders have the power to hide, spin or distort it. And a leader trying to appear outwardly ethical will always find people eager to believe her, no matter the reality. The spectacle of televised political soundbites, mass rallies, pundits clashing over social media, and the new technological horizon of ‘deepfakes’ allow modern leaders to create fictionalized versions of themselves and invent narratives for public consumption. But our culture of political distortion is hardly unprecedented. We see the suppression of factual truth even in the ancient world. Octavian was a murderous dictator, but when he made himself into Augustus he made Rome see him as a wise and beloved father figure. Ethics investigations, audits, and reports may discover the truth about an unethical leader, but they can’t stop him unless public opinion is willing to listen to them. Adding to the difficulty of effective ethics mechanisms, the professionalization of politics has allowed the most naturally persuasive people to make careers out of public life and often come into power. Effective politicians have a knack for shaping public opinion and the most effective politicians can persuade the public to look away from factual truth entirely. Moreover, as Max Weber describes, leaders are aided by a professional class of office-seekers, political bosses, and rentiers who depend on government support and connections. In return for the leader’s influence, the prestige of his office, and the financial and professional security he can offer, these self-interested hangers-on hide, deflect and distract from a leader’s misdeeds. Even the ideological underpinnings of liberal democracy can be careful bent by savvy politicians. After all, can most people articulate what freedom means to them? Does it consist of french fries, a flag, and supporting the military? Only the character of a leader can guarantee her relative truthfulness and ethical decision-making.</p>
            <p>Overall then, liberal governments provide more safeguards against unethical leadership than authoritarian regimes. But out of necessity, these safeguards are often shelved in times of emergency, when the opportunities for the unethical use of power are the highest. And more fundamentally, power in democracy comes from the opinions of the governed. People are neither entirely discerning nor totally ethical and rational. Their leaders only have to be better than most of us if their character holds them to it. Questions of character shouldn’t be seen as a trivial concern in modern politics. Could the current weakening of American democracy, which political scientists often try to explain through structural mechanisms (probably with good reason), also owe a lot to a sequence of increasingly ambitious and ruthless political leaders in the Republican party? The US may be unraveling because of new cleavages caused by globalization or the overpowering influence of corporations in government. But surely the personal flaws of Newt Gingrich, Dick Cheney, and yes Donald Trump deserve blame too. As we try to navigate the next tumultuous chapter of modern American politics we’d do well to remember that.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>

        <Grid item xs={12}>
        <Box sx={
          {
              backgroundColor: '#BDBBB0',
              height: '10vh',
        }}>
        </Box>
        </Grid>
      </Grid>

      </Container>
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
        <BottomNavigationAction label="Home" href="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Blog" href="/#/blog" icon={<LibraryBooksIcon />} />
        <BottomNavigationAction label="Projects" href="/#/projects" icon={<CodeIcon />} />
        <BottomNavigationAction label="Contact" href="/#/contact" icon={<EmailIcon />} />
        </BottomNavigation>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

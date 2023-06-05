//Components
import Head from './Head';
import ListButtons from './ListButtons';
import ListItems from './ListItems';
import NewButton from './NewButton';

const App = () => {
    return (
        <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4'>
            <Head></Head>
            <ListButtons></ListButtons>
            <ListItems></ListItems>
            <NewButton></NewButton>
        </div>
    )
};

export default App;
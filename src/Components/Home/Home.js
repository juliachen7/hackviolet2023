
import './Home.css';
import Timeline from '../Timeline/Timeline.js';
import Background from '../Background/Background.js';
import Layout from "../Layout/Layout";
import MainLayout from "../MainLayout/MainLayout";

export default function Home() {
    console.log('test')
    return (
        <div>
            <Layout></Layout>
            <MainLayout></MainLayout>
            {/* <Timeline></Timeline> */}
            <Background></Background>
        </div>
    )
}
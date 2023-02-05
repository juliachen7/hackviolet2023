
import './Home.css';
import Timeline from '../Timeline/Timeline.js';
import Background from '../Background/Background.js';
import Layout from "../Layout/Layout";

export default function Home() {
    console.log('test')
    return (
        <div>
            <Layout></Layout>
            <Timeline></Timeline>
            <Background></Background>
        </div>
    )
}
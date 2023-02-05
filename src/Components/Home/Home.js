
import './Home.css';
import Timeline from '../Timeline/Timeline.js';
import Background from '../Background/Background.js';
import Layout from "../Layout/Layout";
import MainLayout from "../MainLayout/MainLayout";
import {Slider} from "@mui/material";
import Timeline2 from "../Timeline/Timeline2";

export default function Home() {
    console.log('test')

    // function to increment day


    return (
        <div>
            <Layout></Layout>
            {/*<Timeline></Timeline>*/}
            <Timeline2></Timeline2>
            <MainLayout phase={1}></MainLayout>
            <Background></Background>
        </div>
    )
}
import React, { FunctionComponent, useEffect, Fragment } from "react";
import get from "lodash/get";
import { format } from "date-fns";
import { Link, RouteComponentProps } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "react-helmet";
import removeMd from "remove-markdown";
import ReactSVG from "react-svg";

import "./Story.scss";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";

import ReactMarkdown from "react-markdown";
import Loading from "../../components/Loading";
import StoryStore from "../../stores/storyStore";

import BackgroundBubbles from "../../assets/images/large-medium-bubble.svg";

interface IProps extends RouteComponentProps {
  storyStore?: StoryStore;
}

const Story: FunctionComponent<IProps> = ({ storyStore, match }) => {
  useEffect(() => {
    if (!storyStore) return;

    const getStory = async () => {
      await storyStore.fetchStory(get(match, "params.storyId"));
    };

    getStory();
  }, [match]);

  if (!storyStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>
          {`Our COVID Voices | ${
            storyStore.story
              ? removeMd(storyStore.story.excerpt)
              : "Selected Experience"
          }`}
        </title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center story">
        <div className="flex-col--12">
          <Breadcrumb
            crumbs={[
              { url: "/", text: "Home" },
              { url: "/browse", text: "Stories" },
              { url: "", text: "Selected Experience" },
            ]}
          />
        </div>

        {!storyStore.storyLoading && storyStore.story ? (
          <Fragment>
            <div className="flex-col--12">
              <div className="flex-container flex-container--no-padding story--info">
                <div className="flex-col--12">
                  <Link to="/browse" className="story--info--back">
                    <FontAwesomeIcon icon="chevron-left" /> Back to search
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-col--mobile--12 flex-col--11">
              <h1 className="story--info--date">{`Date added ${format(
                new Date(storyStore.story.created_at),
                "do MMMM yyyy"
              )}`}</h1>
            </div>

            <div className="flex-col--mobile--12 flex-col--11">
              <ReactMarkdown
                className="story--content markdown"
                source={storyStore.story.content}
              />
            </div>
          </Fragment>
        ) : (
          <div className="story--info">
            <Loading input="selected story" />
          </div>
        )}
        <ReactSVG
          src={BackgroundBubbles}
          className="story--background tablet--large-hide"
        />
      </div>

      <Footer>
        <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center story--footer">
          <div className="flex-col--11">
            {!storyStore.storyLoading && (
              <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center story--tags--list">
                {storyStore.tags.length ? (
                  storyStore.tags.map((tag) => (
                    <Tag story={true} text={tag.name}></Tag>
                  ))
                ) : (
                  <Tag story={true} text="No tag" />
                )}
              </div>
            )}
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("storyStore")(observer(Story));

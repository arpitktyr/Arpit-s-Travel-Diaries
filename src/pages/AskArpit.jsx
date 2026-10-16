import { Helmet } from "react-helmet";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AskArpit = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const FIREBASE_FUNCTION_URL = import.meta.env.VITE_FIREBASE_FUNCTION_URL;

  const askAI = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch(FIREBASE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid server response.");
      }

      if (!response.ok) {
        throw new Error(data.error || data.message || "Request failed.");
      }

      setAnswer(data.answer || "No answer returned.");
    } catch (err) {
      console.error("AskArpit fetch error:", err);

      setError(err.message || "Unable to call AI service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Ask Arpit | Arpit&apos;s Travel Diaries</title>
        <meta
          name="description"
          content=" Welcome to 'Arpit's Travel Diaries', your ultimate destination
          for immersive travel stories and adventures! Here, I share my
          passion for exploring new places, cultures, and experiences.
          Each weekend, I take you on a journey through my latest travel
          escapades, providing a detailed account of the sights, sounds,
          and flavors I've encountered along the way."
        />
      </Helmet>
      <div className="inner-banner">
        <section className="w3l-breadcrumb">
          <div className="container">
            <h4 className="inner-text-title font-weight-bold text-white mb-2">
              Ask Arpit
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="./">Home</a>
              </li>
              <li className="active">
                <span
                  className="fa fa-chevron-right mx-2"
                  aria-hidden="true"
                ></span>
                Ask Arpit
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="w3l-text-6 py-5" id="about">
        <div className="text-6-mian py-md-4 py-3">
          <div className="container">
            <div className="row top-cont-grid align-items-center">
              <div className="col-lg-12 text-6-info mt-lg-0 mt-4">
                <h3 className="title-style">Ask Arpit</h3>
                <div className="p-4 rounded-xl bg-black">
                  <p className="text-wrap mb-4">
                    Ask Arpit anything related to travel, biking, gadgets and
                    more!
                  </p>

                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask about rides, travel, camera..."
                    className="p-3 w-100"
                  />

                  <button onClick={askAI} className="btn-block btn-style mt-4">
                    {loading ? "Thinking..." : "Ask Arpit"}
                  </button>

                  {answer && (
                    <div
                      className="mt-4 p-4 rounded"
                      style={{
                        lineHeight: "1.8",
                        border: "1px solid #333",
                      }}
                    >
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {answer}
                      </ReactMarkdown>
                    </div>
                  )}

                  {error && (
                    <p className="mt-4 p-4">
                      <strong>Error:</strong> {error}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AskArpit;

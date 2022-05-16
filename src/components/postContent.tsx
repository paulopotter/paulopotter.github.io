import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import Header from "./header";

type PostType = {
    content: string;
    date: string;
    excerpt: string;
    imagePath: string;
    slug: string;
    title: string;
};
interface Props {
    post: PostType;
}

const PostContent = ({ post }: Props) => {
    return (
      <>
      <Header title={post.title}>
        <link href={`./static/styles/article.css`} rel="stylesheet" />
      </Header>
        <article className="content">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    p: ({ node, children }) => {
                      // @ts-ignore
                        if (node.children[0].tagName === "img") {
                            const image: any = node.children[0];
                            return (
                                <div className="image">
                                    <Image
                                        src={`/images/${image.properties.src}`}
                                        alt={image.properties.alt}
                                        width="600"
                                        height="300"
                                    />
                                </div>
                            );
                        }

                        return <p>{children}</p>;
                    },
                    code({ className, children }) {
                        const language = className?.replace("language-", "");

                        return (
                            <SyntaxHighlighter
                                style={materialDark}
                                language={language}
                                // @ts-ignore
                                children={children[0]}
                            />
                        );
                    },
                }}
            >
                {post.content}
            </ReactMarkdown>
        </article>
      </>
    );
};

export default PostContent;

import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
    {` `}&bull;{` `}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          platform.name !== "GitHub" &&
          (
            <Fragment key={platform.url}>
              <Styled.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.name}
              </Styled.a>
            {/* arr.length -2 here to account for the null entry for GitHub. */}
              {arr.length - 2 !== i && (
                <Fragment>
                  {` `}&bull;{` `}
                </Fragment>
              )}
            </Fragment>
          )
        ))
      : null}
  </footer>
)
export default Footer

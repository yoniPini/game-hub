import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  // const { data, error, isLoading } = useGames(gameQuery);
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error?.message}</Text>;

  // return (
  //   <Box padding={10}>
  //     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
  //       {isLoading &&
  //         skeletons.map((skeleton) => (
  //           <GameCardContainer key={skeleton}>
  //             {" "}
  //             <GameCardSkeleton />
  //           </GameCardContainer>
  //         ))}

  //       {data?.pages?.map((page, index) => (
  //         <React.Fragment key={index}>
  //           {page.results.map((game) => (
  //             <GameCardContainer key={game.id}>
  //               <GameCard game={game} />
  //             </GameCardContainer>
  //           ))}
  //         </React.Fragment>
  //       ))}
  //     </SimpleGrid>
  //     {hasNextPage && (
  //       <Button
  //         className="btn btn-primary my-3"
  //         disabled={isFetchingNextPage}
  //         onClick={() => fetchNextPage()}
  //       >
  //         {isFetchingNextPage ? "Loading..." : "Load more"}
  //       </Button>
  //     )}
  //   </Box>
  // );

  return (
    <InfiniteScroll
      dataLength={
        data?.pages?.reduce(
          (acc, curPage) => acc + curPage.results.length,
          0
        ) || 0
      }
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding={10}>
        {data?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;

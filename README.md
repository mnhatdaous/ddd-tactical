# Definition

## Anemic vs. Rich Models

## Aggregate

an Aggregate is a cluster of related objects that form a consistency boundary and are treated as a single unit. An aggregate root is the entity that controls the access and behavior of the other objects in the aggregate

## Domain Service

a Domain Service is a stateless, operation-centric class that encapsulates domain logic or operations that don't naturally fit within the boundaries of an Entity or a Value Object. These services are all about performing actions or providing domain-specific functionality that doesn't belong to a single entity.

## Application Service

an Application Service is a service that represents a use case or operation in the application. It is typically implemented as a class that contains the application-specific business logic for performing a specific operation.

## Repositories

Repositories are used to encapsulate the logic required to access data sources for aggregate roots, which are entities that serve as entry points to an aggregate, a cluster of domain objects that can be treated as a single unit. They provide a collection-like interface for accessing domain objects
